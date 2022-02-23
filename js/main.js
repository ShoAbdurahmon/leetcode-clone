select.onchange = event => {
    let problem = problems[event.target.value]
    console.log(problem)

    textArea.value = problem.beggining

    let conditionHeader = document.querySelector('.condition-header')
    let conditionDescription = document.querySelector('.condition-description')

    conditionHeader.textContent = problem.title
    conditionDescription.textContent = problem.definition

    
    let input = document.querySelectorAll('#input')
    let output = document.querySelectorAll('#output')
    
    let count = 0
    for(let {answer, test} of problem.tests){
        if(count == 2) break

        input[count].textContent = test
        output[count].textContent = answer
        
        count += 1

    }

}


function render(problems){

    let conditionHeader = document.querySelector('.condition-header')
    let conditionDescription = document.querySelector('.condition-description')

    conditionHeader.textContent = problems[0].title
    conditionDescription.textContent = problems[0].definition

    for(let problem of problems){
        let option = document.createElement('option')
        option.value = problems.indexOf(problem)
        option.textContent = problem.title
        select.append(option)





        let index = problems.indexOf(problem)
        if(index == 0){
            textArea.value = problem.beggining
            let input = document.querySelectorAll('#input')
            let output = document.querySelectorAll('#output')
            
            
            input[index].textContent = problem.tests[index].test
            output[index].textContent = problem.tests[index].answer
            input[1].textContent = problem.tests[1].test
            output[1].textContent = problem.tests[1].answer
                
             
        }
    }

}




render(problems)





form.onsubmit = event => {
    event.preventDefault()
	try {
        let problem = problems[select.value]
        let func = new Function('arg', `
		${textArea.value}

		return ${problem.func}(arg)
	    `)
    

        let tests = problems[select.value].tests

        let bool = true
        checking.innerHTML = null
        for(let i of tests){
            let result = func(i.test)
            if(result == i.answer){
                checking.innerHTML += `<li>${tests.indexOf(i) + 1}. <span class="status">Success <i class="fas fa-check"></i></span></li>`
            }else{
                bool = false
                checking.innerHTML += `<li>${tests.indexOf(i) + 1}. <span class="status">Fail <i class="fas fa-times"></i></span></li>`
            }
        }
        if(bool){
            console.log("1000 % correct")
        }
    }catch(error){
        alert(error)
    }
	
}





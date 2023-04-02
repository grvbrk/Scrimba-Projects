
let myleads = []
const inputEl = document.querySelector(".input-el")
const ulEl = document.querySelector(".ulList")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("allLeads"))
if (leadsFromLocalStorage != null) {
    myleads = leadsFromLocalStorage
    render(myleads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
                        <li>
                            <a href='#' target="_blank" rel="noopener noreferrer"> ${leads[i]} </a>
                        </li>
                    `
    }

    ulEl.innerHTML = listItems
}

const tabBtn = document.querySelector(".save-btn")
tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myleads.push(tabs[0].url)
        inputEl.value = ''
        localStorage.setItem("allLeads", JSON.stringify(myleads))
        render(myleads)
    })
})



const deleteButton = document.querySelector(".delete-btn")
deleteButton.addEventListener("dblclick", function () {
    localStorage.clear()
    myleads = []
    render(myleads)
})

const inputButton = document.querySelector(".input-btn")
inputButton.addEventListener("click", function () {
    if (inputEl.value != '') {
        myleads.push(inputEl.value)
        inputEl.value = ''
        localStorage.setItem("allLeads", JSON.stringify(myleads))
        render(myleads)
    }
})


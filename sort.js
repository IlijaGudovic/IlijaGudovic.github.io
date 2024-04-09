
const tableEl = document.querySelector('.example');

test = []
test.push("1")
test.push("2")
test.push("3")

htmlToAppend = test

tableEl.innerHTML = htmlToAppend;

function order()
{
    htmlToAppend = test.reverse()

    tableEl.innerHTML = htmlToAppend;
}
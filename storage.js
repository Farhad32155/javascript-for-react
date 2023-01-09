//local & session storage both are same just have difference how much time they will last
//-> session storage--if i open a tab or change wesite session storage will be gone
//->local storage--if I close browser, internet gone, close laptop data will be stored in local storage if I open the browser again

//setItem--if I want to add something--two parameters('name/key', value--we can store anything we want like a object or an array)
//-->if we wanto to set an array or object then we need to JSON.stringify(array/object) them.
/* if we want to get something from local storage then we need to JSON.parse(that_item) and then again we need to JSON.stringify the item 
for keep that item in the local storage */
//getItem--if I want to get something that is alreday present in localStorage
//removeItem--remove any item from localStorage
//clearItem--clear the localStorage

//--now set a item dynamically
const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //writing conditions --so that we can stop anything to be added in the local storage
    if (id && value) {
        /* both needs to be truthy */
        localStorage.setItem(id, value);

    }
    //clearing the input field after doing all the operation taking input and adding to the local storage
    idInput.value = '';
    valueInput.value = '';
}
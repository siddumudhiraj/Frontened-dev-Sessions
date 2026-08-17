let myPromise = new Promise<string>((resolve,reject) => {
        let success = true;
        if(success){
            resolve("Data loaded successfully");
        }else{
            setTimeout(() => {
                reject("Network error");
            }, 2000);
        }
});
myPromise
    .then(result => {console.log(result)})
    .catch(error => {console.log(error)});

// Asyn/Await - Introduced to resolve promise chaining(In place of .then)
// await pauses the execution of an async function until a Promise is resolved or rejected.
// You can only use await inside an async function
async function greet(){
    return "hello";
}
greet().then(console.log);

function fetchData(): Promise<string>{
        return Promise.resolve("data fetched");
}
async function display(){
    let data = await fetchData();
    console.log(data);
}
display();

// Try-Catch
function login(): Promise<string> {

    return new Promise((resolve, reject) => {
        const success = false;
        if (success) {
            resolve("Login Success");
        } else {
            reject("Invalid Password");
        }
    });
}

async function start() {
    try {
        const result = await login();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
start();
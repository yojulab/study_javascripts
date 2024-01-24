// fetch() 기본 문법
// async (params) => {
//     try {
//         let response = await fetch(url, options)
//     } catch (error) {
//         console.log(`Error Message : ${error.message}`)
//     }
// }

// from data.go.kr with loan rate
let rate_list = document.querySelector("#rent-loan-rate-info_rate-list");
let numbers = 1
rate_list.addEventListener('click', async (event) => {
    let url = `https://apis.data.go.kr/B551408/rent-loan-rate-info/rate-list?serviceKey=BoygPZjC27pxm92hSposjnSob2u36vziS1rzIzxkrL9QxmlhB0SMARwLfNlBE3wrE7nnw34zLmmv0a6amvW4xg%3D%3D&pageNo=1&numOfRows=30&dataType=JSON` ;
    let options = {}; // python dict 유사
    numbers = numbers + 1;
    try {
        let response = await fetch(url, options);   // send

        let result = await response.json(); // 응답

        console.log(`response result : ${result}`)

        let contents = document.querySelector("#rent-loan-rate-info_rate-list_contents");
        contents.innerHTML = result['header']['resultMsg'];
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});

// CORS 정책으로 접근 불가, 자체 서버 경우 필요
// datalab_shoppinginsite from naver api
let shopping_insite = document.querySelector("#datalab_shoppinginsite");
shopping_insite.addEventListener('click', async (event) => {
    let url = `https://openapi.naver.com/v1/datalab/shopping/categories` ;
    let data = {
        "startDate": "2023-08-01",
        "endDate": "2023-09-30",
        "timeUnit": "month",
        "category": [
            {"name": "패션의류", "param": [ "50000000"]},
            {"name": "화장품/미용", "param": [ "50000002"]}
        ],
        "device": "pc",
        "gender": "f",
        "ages": [ "20",  "30"]
      }
    let options = {
        method : "POST"
        , mode: "no-cors" // no-cors, *cors, same-origin
        ,cache: "no-cache" // *default, no-cache, reload, force-cache, only-if-cached
        ,credentials: "same-origin" // include, *same-origin, omit
        , redirect: "follow" // manual, *follow, error
        , referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        , headers : {
            "X-Naver-Client-Id":"FgRcI134o3JcUtBEYT8v"
            , "X-Naver-Client-Secret":"kdq7Y9wHFh"
            , "Content-Type" : "application/json"
        }
        , body : JSON.stringify(data)
    }; // python dict 유사
    try {
        let response = await fetch(url, options);   // send

        let result = await response.json(); // 응답

        console.log(`response result : ${result}`)

        let contents = document.querySelector("#datalab_shoppinginsite_contents");
        contents.innerHTML = result['endDate'];
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});
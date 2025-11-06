
async function searchCharacter(){
    const nickname= document.getElementById("nickname").value;

    const resultDiv= document.getElementById("result");
    resultDiv.innerText =nickname+"검색중..."

    try {
        const response= await fetch(`https://cors-anywhere.herokuapp.com/https://open.api.nexon.com/maplestory/v1/id?nickname=${nickname}`,{headers :{
             "x-nxopen-api-key": "test_fd8eed0087767b0ff3fee45805afa966e3ac740204edfea96c222a3f9a392e79efe8d04e6d233bd35cf2fabdeb93fb0d"
        }})
    
        const data = await response.json();
        console.log("API 응답 데이터:", data);
        resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        resultDiv.innerHTML = `<p>캐릭터 이름: ${data.character_name} </p>`;
    }
    catch(error){
        resultDiv.innerText="에러가 발생하였습니다."
        console.error(error)
    }
}


document.getElementById("search").addEventListener("click",searchCharacter)

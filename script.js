

async function searchCharacter(){
    const nickname= document.getElementById("nickname").value;

    const resultDiv= document.getElementById("result");
    resultDiv.innerText =nickname+"검색중..."

    try {
        const response= await fetch("https://open.api.nexon.com/maplestory/v1/id?character_name="+nickname,{headers :{
             "x-nxopen-api-key": API_KEY
        }})
    
        const data = await response.json();
        resultDiv.innerHTML = `<p>캐릭터 이름: ${data.character_name} </p>`;
    }
        
    catch(error){
        resultDiv.innerText="에러가 발생하였습니다."
        console.error(error)
    }
}


document.getElementById("search").addEventListener("click",searchCharacter)

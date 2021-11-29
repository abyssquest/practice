fetch('https://codingapple1.github.io/price.json'
).then(function(response){
	return response.json(); // 파싱
}).then((결과) => {
	console.log(결과); // 파싱 결과 출력
}).catch(()=>{
	console.log('에러남');
});
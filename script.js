//your JS code here. If requ
const outputDiv = document.getElementById("output");
myPromise1()
.then((arr)=>{
	return myPromise2(arr)
})
.then((arr)=>{
	outputDiv.textContent=arr.join(",")
	return myPromise3(arr)
}).then((arr)=>{
	outputDiv.textContent =arr.join(",")
})
function myPromise1(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(
				[1,2,3,4]
			)
		},3000)
	})
}

function myPromise2(data){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(
				data.filter(elem=>elem%2==0)
			)
		},1000)
	})


	
}
function myPromise3(data){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(data.map(elem=>elem*2))
			},2000)
		})
	}


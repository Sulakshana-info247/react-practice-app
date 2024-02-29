const dummyApiResponse ={
     showLightDarkMode : false,
     showTicTacToeBoard: true,
     showRandonColorsGenerator : true,
     showAccordian: false,
     showTabs: true
}

function fetchFeatureFlagsDataServiceCall (){
    return new Promise((resolve,reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse),500)
        else reject('Some error occured! Please try again')

    })
}
export default fetchFeatureFlagsDataServiceCall;


const CityCard =({result})=>{
    return(
        <div>
            <h1>شیراز</h1>
            <h2>{result.data.result.main.temp}</h2>
        </div>
    )
}

export default CityCard;
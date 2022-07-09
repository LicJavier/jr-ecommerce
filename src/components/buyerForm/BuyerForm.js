

export default function BuyerForm(inputChange) {
    return(
        <div className="container__buyer">
            <label className="buyer__label">{inputChange.text}</label>
            <input className="buyer__input" name={inputChange.type} type="text" onChange={inputChange.onChange} />
        </div>
    )
}
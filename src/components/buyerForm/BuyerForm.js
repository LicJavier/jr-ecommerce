

export default function BuyerForm(inputChange) {
    return(
        <div className="form-control mb-3">
            <label htmlFor="floatingInputValue" className="buyer__label form-label">{inputChange.text}</label>
            <input className="form-control" name={inputChange.type} type="text" onChange={inputChange.onChange} />
        </div>
    )
}
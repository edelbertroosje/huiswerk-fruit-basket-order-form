import React from 'react';
import './App.css';
import Counter from "./components/counter/counter";

function App() {
    const [aardbei, setAardbei] = React.useState(0);
    const [banaan, setBanaan] = React.useState(0);
    const [appel, setAppel] = React.useState(0);
    const [kiwi, setKiwi] = React.useState(0);
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);
    //const [submitted, setSubmitted] = React.useState(false);
    const [form, setForm] = React.useState({
        firstName: "",
        lastName: "",
        ageName: "",
        codeName: "",
        bioName: "",
        selectName:"",
        radioName:"",
    });

    function handleChange(e) {
        e.preventDefault()
       console.log(setForm(e.target.value));
        console.log(setForm(e.target.name));
    }

    function reset() {
        setAardbei(0);
        setBanaan(0);
        setAppel(0);
        setKiwi(0);
    }

    return (
        <>
            <Counter name="🍓 Aardbeien" fruit={aardbei} setFruit={setAardbei}/>
            <Counter name="🍌 Banaan" fruit={banaan} setFruit={setBanaan}/>
            <Counter name="🍏 Appels" fruit={appel} setFruit={setAppel}/>
            <Counter name="🥝 Kiwi's" fruit={kiwi} setFruit={setKiwi}/>
            <button
                type="button"
                onClick={reset}
            >
                reset
            </button>
            <fieldset>
                <form onSubmit={handleChange}>
                    <label htmlFor="name">Voornaam </label>
                    <input type="text" id="name" value={form.firstName} onChange={handleChange}/><br/><br/>
                    <label htmlFor="last-name">Achternaam </label>
                    <input type="text" id="last-name" value={form.lastName} onChange={handleChange}/><br/><br/>
                    <label htmlFor="age">Leeftijd </label>
                    <input type="text" id="age" value={form.ageName} onChange={handleChange}/><br/><br/>
                    <label htmlFor="zipcode">Postcode </label>
                    <input type="text" id="zipcode" value={form.codeName} onChange={handleChange}/><br/><br/>
                    <legend>Bezorgfrequentie</legend>
                    <br/>
                    <select name="select" id="select" value={form.selectName} onChange={handleChange}>
                        <option value="iedere week">iedere week</option>
                        <option value="om de week">om de week</option>
                        <option value="iedere maand">iedere maand</option>
                    </select><br/>
                    <input type="radio" id="Overdag" name="day-time" checked={form.radioName === "Overdag"} onChange={handleChange}/>
                    <label htmlFor="day-time">Overdag </label>
                    <input type="radio" id="Savonds" name="day-time" checked={form.radioName === "Savonds"} onChange={handleChange}/>
                    <label htmlFor="day-time">S'avonds </label>
                    <legend>Opmerking</legend>
                    <textarea id="" cols="40" rows="7" value={form.bioName} onChange={handleChange}></textarea><br/>
                    <input type="checkbox"
                           id="agreed"
                           checked={checkedTerms}
                           onChange={() => toggleCheckedTerms(!checkedTerms)}
                    />
                    <label htmlFor="agreed">Ik ga akkoord met de voorwaarden</label><br/>
                    <button type="submit" disabled={!checkedTerms} onClick={handleChange}>Verzend</button>
                </form>
            </fieldset>
        </>
    );
}

export default App;

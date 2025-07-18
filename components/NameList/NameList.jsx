import './NameList.css'

export const NameList = () => {
    const names = ["Ana", "Luis", "Clara", "Sergio", "Marta"];

    return (
        <div className="container">
            <h2>Lista de nombres</h2>

            <ul>
                {names.map((name, index) => {
                    return <div key={`${name}-${index}`}>
                        <h3>{name}</h3>
                    </div>
                })}
            </ul>
        </div>
    )
}
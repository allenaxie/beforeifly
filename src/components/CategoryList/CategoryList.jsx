import {Button} from "antd";
import "./CategoryList.css";

export default function CategoryList ({ categories ,activeCateg, setActiveCateg}) {

    console.log(activeCateg)

    const categs = categories.map( categ => 
        <Button
            key ={categ}
            className={categ === activeCateg ? 'active' : ''}
            onClick={() => setActiveCateg(categ)}
        >
            {categ}
        </Button>
        )

    return (
        <ul className="CategoryList">
            {categs}
        </ul>
    )
}
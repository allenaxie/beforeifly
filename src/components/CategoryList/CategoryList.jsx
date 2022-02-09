import { Button, Layout } from "antd";
import "./CategoryList.css";


export default function CategoryList({ categories, activeCateg, setActiveCateg }) {

    const { Header, Content } = Layout

    const categs = categories.map(categ =>
        <Button
            key={categ}
            onClick={() => setActiveCateg(categ)}
        >
            {categ}
        </Button>
    )

    return (
        <div className="category-tabs">
            <Button onClick={() => setActiveCateg('All')}>
                All
            </Button>
            {categs}
        </div>
    )
}
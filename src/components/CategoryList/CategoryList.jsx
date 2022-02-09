import { Button, Layout, Tabs } from "antd";
import "./CategoryList.css";


export default function CategoryList({ categories, activeCateg, setActiveCateg }) {

    const { Header, Content } = Layout;
    const { TabPane } = Tabs;

    console.log('categ', activeCateg)

    const categs = categories.map((categ, idx) =>
 
            <TabPane
                key={categ}
                tab={categ}
            // onTabClick={() => setActiveCateg(categ)}
            >
            </TabPane>

       
        // <Button
        //     key={categ}
        //     onClick={() => setActiveCateg(categ)}
        // >
        //     {categ}
        // </Button>
    )

    function handleTabClick (key) {
        console.log(key)
        setActiveCateg(key);

    }

    return (
        // <div className="category-tabs">
        //     <Button onClick={() => setActiveCateg('All')}>
        //         All
        //     </Button>
        //     {categs}
        // </div>

            <Tabs
                defaultActiveKey="0"
                className="category-tabs"
                centered
                onTabClick={handleTabClick}>
                <TabPane
                    tab={<span>All</span>}
                    key="All"
                >
                </TabPane>

                {categs}
            </Tabs>
            
            )
}
import { useAppContext } from "../store/store";
import Layout from "../composants/layout";
import Book from "../composants/book";

export default function Index() {

    const store = useAppContext();


  return (
    <div>
      <Layout>
        <ul className="list">
            {store.items.map((item)=> {
                <Book key={item.id}  item={item}/>
            })}
        </ul>
      </Layout>
    </div>
  )
}

import Link from "next/link"
import Header from "./header"
import Footer from "./footer"
import FastButton from "./fastbutton";

async function fetchData() {
  const res = await fetch('https:/jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result;
}

export default async function Home() {
  const res = await fetchData();

  return (
    <div>
      <Header></Header>

      <section className="container margin-50">
        <div className="row">
          <div className="col-xs-none col-md-2"></div>
          <div className="col-12 col-md-8">
            <div className="block back-1 flex-a-center gap-10">
              <div className="flex flex-a-center flex-column">
                <h3 className="margin-0">Настройски поиска</h3>
                <p className="gray margin-0">Найдите нужную вам запись. <Link href="/search-info" className="yellow">Помощь</Link></p>
              </div>
              <input className="gray input" placeholder="Введите название записи"/>
              <input className="gray input" placeholder="Введите теги" id="input-tags"/>
              <FastButton></FastButton>
              <input className="button but-blue" type="submit" value="Искать запись"/>
            </div>
          </div>
          <div className="col-xs-none col-md-2"></div>
        </div>
      </section>

      <section className="container margin-50">
        <div className="row">
        <div className="col-xs-none col-md-2"></div>
          <div className="col-12 col-md-8">
            <div className="flex flex-column gap-10">
              <div className="block back-2 gap-5">
                <h3 className="margin-0">Title</h3>
                <p className="gray margin-0">Краткое описание записи</p>
                <p className="white margin-0">Автор: Автор</p>
                <p className="gray margin-0">Автор: Автор</p>
                <Link href="" className="button but-blue link margin-0 width-fit">Перейти к записи</Link>
              </div>

              <div className="block back-2 gap-5">
                <h3 className="margin-0">Название записи</h3>
                <p className="gray margin-0">Краткое описание записи</p>
                <p className="white margin-0">Автор: Автор</p>
                <p className="gray margin-0">Автор: Автор</p>
                <Link href="" className="button but-blue link margin-0 width-fit">Перейти к записи</Link>
              </div>

              <div className="block back-2 gap-5">
                <h3 className="margin-0">Название записи</h3>
                <p className="gray margin-0">Краткое описание записи</p>
                <p className="white margin-0">Автор: Автор</p>
                <p className="gray margin-0">Автор: Автор</p>
                <Link href="" className="button but-blue link margin-0 width-fit">Перейти к записи</Link>
              </div>
            </div>
          </div>
          <div className="col-xs-none col-md-2"></div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  )
}
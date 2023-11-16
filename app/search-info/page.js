import Header from "../header"
import Footer from "../footer"
import Link from "next/link"

export default function SeacrhInfo() {
    return (
        <div>
            <Header></Header>

            <section className="container margin-50">
                <div className="row">
                    <div className="col-12">
                        <h2>Поисковая система</h2>
                    </div>
                    <div className="col-6">
                        <img className="img" src="/img/img-1.png" alt="img1"/>
                    </div>
                    <div className="col-6">
                        <h3>Поиск по <span className="yellow">названию</span></h3>
                        <p>Просто используйте первый фильтр, если вы знаете точное название записи, которую хотите найти</p>
                    </div>
                </div>
            </section>

            <section className="container margin-50">
                <div className="row">
                    <div className="col-6 order-2">
                        <img className="img" src="/img/img-2.png" alt="img2"/>
                    </div>
                    <div className="col-6 order-1">
                        <h3>Поиск по <span className="yellow">тегам</span></h3>
                        <p>
                        Если не знаете название записи, попробуйте найти её по тегам. Введите соответствующие теги, например:
                        <br/>Колледж, КВТ, 1_курс, Математика
                        </p>
                    </div>
                </div>
            </section>

            <section className="container margin-50">
                <div className="row">
                    <div className="col-6">
                        <img className="img" src="/img/img-3.png" alt="img3"/>
                    </div>
                    <div className="col-6">
                        <h3>Быстрые <span className="yellow">теги</span></h3>
                        <p>
                            Быстрые теги помогут вам выбрать нужные теги без необходимости вводить их вручную. Они предоставляют небольшую помощь в ориентации по названию тегов
                        </p>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    )
}  
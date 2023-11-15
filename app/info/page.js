import Header from "../header"
import Footer from "../footer"
import Link from "next/link"

export default function Info() {
    return (
        <div>
            <Header></Header>
            <section className="container margin-50 back-fill back-b-blue height-200">
                <div className="row">
                    <div className="col-2 col-md-3"></div>
                    <div className="col-8 col-md-6">
                        <div className="block back-1 flex-start gap-0 margin-10">
                            <h3>StudyHub BSTU</h3>
                            <p>Мы создали сервис для обмена заданиями между студентами БГТУ. Это простой и удобный способ помочь друг другу</p>
                            <Link href="/" className="button but-blue link margin-10">Начать</Link>
                        </div>
                    </div>
                    <div className="col-2 col-md-3"></div>
                </div>
            </section>

            <section className="container margin-50 back-fill back-b-green height-200">
                <div className="row">
                    <div className="col-2 col-md-3"></div>
                    <div className="col-8 col-md-6">
                        <div className="block back-1 flex-start gap-0 margin-10">
                            <h3>Информация</h3>
                            <p>Наши условия просты: вы загружаете свои задания на сайт и получаете выполненные работы других студентов взамен</p>
                            <Link href="/search-info" className="button but-green link margin-10">Подробнее</Link>
                        </div>
                    </div>
                    <div className="col-2 col-md-3"></div>
                </div>
            </section>
            
            <section className="container margin-50 back-fill back-b-blue height-200">
                <div className="row">
                    <div className="col-2 col-md-3"></div>
                    <div className="col-8 col-md-6">
                        <div className="block back-1 flex-start gap-0 margin-10">
                            <h3>Развитие</h3>
                            <p>Мы собираемся продолжать развивать проект, и ваша поддержка очень важна для нас. Если сайт будет пользоваться спросом, мы будем работать над новыми обновлениями</p>
                            <Link href="/news" className="button but-blue link margin-10">Новости</Link>
                        </div>
                    </div>
                    <div className="col-2 col-md-3"></div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}  
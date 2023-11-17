import Header from "../../header"
import Footer from "../../footer"
import Link from "next/link"

export default function Page({params}) {
    return (
        <div>
            <Header></Header>
            <section className="container margin-50">
                <div className="row">
                    <div className="col-xs-none col-md-2"></div>
                    <div className="col-12 col-md-8">
                        <div className="block back-2 flex-a-start gap-5">
                            <h3 className="margin-0">Название записи</h3>
                            <p className="gray margin-0">Полное описание записи</p>
                            <div className="flex flex-a-center flex-grid gap-10 flex-wrap">
                                <p className="margin-0">Теги:</p>
                                <p className="button but-green link-mini margin-0">Колледж</p>
                                <p className="button but-green link-mini margin-0">ОАиП</p>
                                <p className="button but-green link-mini margin-0">Математика</p>
                                <p className="button but-green link-mini margin-0">ОСС</p>
                            </div>
                            <div className="flex flex-a-center flex-grid gap-10 flex-wrap">
                                <p className="margin-0">Файлы:</p>
                                <Link href="" className="link">File.png</Link>
                                <Link href="" className="link">File.png</Link>
                                <Link href="" className="link">File.png</Link>
                            </div>
                            <p className="margin-0">Автор: Автор</p>
                            <p className="margin-0 gray">Создано: дата создания</p>
                        </div>
                    </div>
                    <div className="col-xs-none col-md-2"></div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}  
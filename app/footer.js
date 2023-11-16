import Link from "next/link"

export default function Footer() {
  return (
    <section className="container margin-50">
      <div className="row">
        <div className="col-4">
            <div className="flex flex-column gap-5 padding-tb-5 border-right-gray height-full">
                <h4 className="white margin-0">Авторы:</h4>
                <Link href="https://t.me/Mars_Lucifer" className="link gray">Mars Lucifer</Link>
                <Link href="https://t.me/Not_So_Green" className="link gray">bisskymly</Link>
            </div>
        </div>
        <div className="col-4">
            <div className="flex flex-column gap-5 padding-tb-5 border-right-gray height-full">
                <h4 className="white margin-0">Обратная связь:</h4>
                <Link href="" className="link gray">Напишите нам отзыв</Link>
                <Link href="" className="link gray">Напишите о проблемах</Link>
                <Link href="" className="link gray">Свяжитесь по вопросам</Link>
            </div>
        </div>
        <div className="col-4">
            <div className="flex flex-column gap-5 padding-tb-5 height-full">
                <h4 className="white margin-0">Версия: 0.0.2</h4>
                <Link href="https://github.com/Mars-Lucifer/SudyHub-BSTU" className="link gray">GitHub проекта</Link>
            </div>
        </div>
      </div>
    </section>
  )
}
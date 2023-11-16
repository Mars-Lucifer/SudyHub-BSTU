import Link from "next/link"

export default function Header() {
  return (
    <section className="container margin-10">
      <div className="row">
        <div className="col-12">
            <div className="flex flex-j-between flex-a-center">
                <Link href="/" className="link gray">Главная</Link>
                <Link href="/info" className="link gray">Инфомрация</Link>
                <Link href="/news" className="link gray">Новости</Link>
                <Link href="/create" className="button but-blue link">Создать запись</Link>
            </div>
        </div>
      </div>
    </section>
  )
}
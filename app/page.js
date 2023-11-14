import Link from "next/link"

export default function Home() {
  return (
    <section className="container">
      <section className="container">
        <div className="row">
          <div className="col-12 flex-center">
            <div className="block back-1 flex-center">
              <Link href="/">Main</Link>
              <Link href="/info">Info</Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
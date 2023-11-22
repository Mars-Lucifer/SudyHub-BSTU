import Header from "../../header"
import Footer from "../../footer"
import FastButton from "@/app/fastbutton"

export default function Page({params}) {
  return (
      <div>
          <Header></Header>
          <section className="container margin-50">
              <div className="row">
                  <div className="col-xs-none col-lg-2"></div>
                  <div className="col-12 col-lg-8">
                      <div className="block back-2 flex-a-center gap-5">
                          <h3 className="margin-0">Название записи</h3>
                          <p className="gray">
                              Вы создаете новую запись, с помощью неё вы поможете другим студентам
                          </p>
                          <input className="gray input" type="text" placeholder="Введите название записи" required/>
                          <textarea className="gray input" placeholder="Введите описание" required></textarea>
                          <input className="gray input" type="text" placeholder="Введите теги" required id="input-tags"/>
                          <FastButton></FastButton>
                          <input className="gray input-file" multiple type="file" placeholder="Введите название записи" required/>
                          <input className="gray input" type="text" placeholder="Введите ваш псевдоним" required/>
                          <input className="button but-blue margin-10" type="submit" value="Искать запись"/>
                      </div>
                  </div>
                  <div className="col-xs-none col-lg-2"></div>
              </div>
          </section>
          <Footer></Footer>
      </div>
  )
}  
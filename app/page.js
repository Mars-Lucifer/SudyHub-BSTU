'use client'

import Link from "next/link"
import Header from "./header"
import Footer from "./footer"
import React, { useEffect } from 'react';

function ClickButton(event) {
  const button = event.target;
  const inputField = document.getElementById('input-tags');

  if (button.classList.contains('but-gray')) {
    if (inputField.value.length > 0) {
      inputField.value += ', ' + button.value;
    }
    else {
      inputField.value = button.value;
    }
    button.classList.remove('but-gray');
    button.classList.add('but-green');
  }
  else {
    if (inputField.value.includes(', ' + button.value)) {
      inputField.value = inputField.value.replace(', ' + button.value, '');
    }
    if (inputField.value.includes(button.value + ', ')) {
      inputField.value = inputField.value.replace(button.value + ', ', '');
    }
    else {
      inputField.value = inputField.value.replace(button.value, '');
    }
    button.classList.remove('but-green');
    button.classList.add('but-gray');
  }
}

export default function Home() {
  useEffect(() => {
    const buttons = document.getElementsByClassName('fast-tag');
    Array.from(buttons).forEach(button => {
      button.addEventListener('click', ClickButton);
    });
  }, []);

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
              <div className="flex flex-a-center flex-j-center flex-grid gap-10 flex-wrap">
                <p className="margin-0">Быстрые теги:</p>
                <button className="button but-gray link-mini fast-tag" value="Колледж">Колледж</button>
                <button className="button but-gray link-mini fast-tag" value="ОАиП">ОАиП</button>
                <button className="button but-gray link-mini fast-tag" value="Математика">Математика</button>
                <button className="button but-gray link-mini fast-tag" value="ОСС">ОСС</button>
              </div>
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
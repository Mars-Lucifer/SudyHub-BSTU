'use client'

import Header from "../../header"
import Footer from "../../footer"
import Link from "next/link"
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

export default function Page({params}) {
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
                            <div className="flex flex-a-center flex-j-center flex-grid gap-10 flex-wrap">
                                <p className="margin-0">Быстрые теги:</p>
                                <button className="button but-gray link-mini fast-tag" value="Колледж">Колледж</button>
                                <button className="button but-gray link-mini fast-tag" value="ОАиП">ОАиП</button>
                                <button className="button but-gray link-mini fast-tag" value="Математика">Математика</button>
                                <button className="button but-gray link-mini fast-tag" value="ОСС">ОСС</button>
                            </div>
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
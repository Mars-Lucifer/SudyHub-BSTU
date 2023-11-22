'use client'

import React, { useEffect } from "react";

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

export default function FastButton() {
    useEffect(() => {
        const buttons = document.getElementsByClassName('fast-tag');
        Array.from(buttons).forEach(button => {
          button.addEventListener('click', ClickButton);
        });
    }, []);

    return(
        <div className="flex flex-a-center flex-j-center flex-grid gap-10 flex-wrap">
            <p className="margin-0">Быстрые теги:</p>
            <button className="button but-gray link-mini fast-tag" value="Колледж">Колледж</button>
            <button className="button but-gray link-mini fast-tag" value="ОАиП">ОАиП</button>
            <button className="button but-gray link-mini fast-tag" value="Математика">Математика</button>
            <button className="button but-gray link-mini fast-tag" value="ОСС">ОСС</button>
        </div>
    )
}
import React from 'react';
import ReactDOM from 'react-dom';
import style from './common/style/main.css'
import book from './common/img/book.jpg'
import 'font-awesome/css/font-awesome.css'
console.log(style)
ReactDOM.render(
	<div className="fa fa-rocket">
		React
		<div className={style.oc}> 
			<span className={style.ac}>lalalalalalalal</span>
		</div>
		<img src={book} />
	</div>,
	document.getElementById('root')
)
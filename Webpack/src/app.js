import React from 'react';
import ReactDOM from 'react-dom';
import './common/style/main.css'
import book from './common/img/book.jpg'
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(
	<div className="fa fa-rocket">React
		<img src={book} />
	</div>,
	document.getElementById('root')
)
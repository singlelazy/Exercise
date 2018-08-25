import React from 'react';
import ReactDOM from 'react-dom';
import './common/style/main.css'
import book from './common/img/book.jpg'

ReactDOM.render(
	<div className="ret">React
		<img src={book} />
	</div>,
	document.getElementById('root')
)
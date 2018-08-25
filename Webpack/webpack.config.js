const HtmlWebPlugin=require('html-webpack-plugin')
const path=require('path')

module.exports={
	entry:"./src/app.js",
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"main.js"
	},
	mode:'development',
	plugins:[
		new HtmlWebPlugin({
			filename:'index.html',
			template:"src/index.html"
		})
	],
	module:{
		rules:[
			{
				test:/\.js$/,
				use:[
					{
						loader:"babel-loader",
						options:{
							presets:['react']
						}
					}
				]
			},
			//处理CSS文件中出现的URL，会自动帮你引入里面重要的模块
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			//file-loader:
			//	1.把你的资源移动到输出目录
			//	2.返回最终引入资源的URL
			{
				test:/\.(jpg|gif|png|jpeg)$/,
				use:[{
					loader:'url-loader',
					options:{
						limit:10000 //Byte为单位
					}
				}]
			},
			{
				test:/\.(ttf|eot|woff|woff2|svg)$/,
				use:['file-loader']
			}
		]
	},
	devServer:{
		open:true,
		port:9000
	}
}
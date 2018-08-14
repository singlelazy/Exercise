const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
	entry:"./src/app.js", //默认通过查找webpack.config.js的文件进行打包 'webpack --config 自己取得配置文件名'
	output:{
		path:path.resolve(__dirname,'dist'), //__dirname表示当前文件目录的绝对路径,'dist'表示打包后的位置
		filename:'app.js' //打包后的文件名
	}, 
	plugins:[ 			//插件配置
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:'src/index.html'
		})
	],
	module:{			//loaer配置
		rules:[{
			test:/\.js$/,//匹配的文件类型
			use:[{
				loader:'babel-loader',
				options:{
					presets:['react']
				}
			}]
		}]
	},
	devServer:{    //服务器配置
		open:true,  //自动打开浏览器
		port:9000	//切换端口
	},
	mode:"development"  //打包模式：development还是production(压缩的)(webpack4.0新增的)
}
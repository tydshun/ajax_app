class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: "DESC")
  end

  def create
    post = Post.create(content: params[:content], checked: false)
    # メモ作成時に未読の情報を保存するようにしたこと
    render json:{ post: post }
    # レスポンスをJSONに変更したこと
  end

  def checked
    post = Post.find(params[:id])
    # 設定したURLパラメーターから、既読したメモのidが渡されるように設定する、そのidを使用して該当するレコードを取得している
    if post.checked
      # post.checkedという既読であるか否かを判定するプロパティを指定し、既読であれば「既読を解除するためにfalseへ変更」し、既読でなければ「既読にするためtrueへ変更
      post.update(checked: false)
      # updateというActiveRecordのメソッドを使用して更新
    else
      post.update(checked: true)
    end
    item = Post.find(params[:id])
    render json: { post: item }
  end
end


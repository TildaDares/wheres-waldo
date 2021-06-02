class Api::V1::PlayersController < ApplicationController
  def index
    picture = Picture.find(params[:picture_id])
    players = picture.players.all.order(time: :asc)
    render json: players
  end

  def create
    player = Player.create!(player_params)
    if player
      render json: player
    else
      render json: player.errors
    end
  end

  private

  def player_params
    params.require(:player).permit(:name, :time, :picture_id)
  end
end

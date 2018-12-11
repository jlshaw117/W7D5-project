class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      redirect_to api_benches_url
    else
      redirect_to api_benches_url
    end
  end

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end

class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :artist_id
      t.string :nome
      t.string :nacionalidade
      t.string :delegacao

      t.timestamps
    end
  end
end

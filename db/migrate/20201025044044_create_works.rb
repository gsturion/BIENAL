class CreateWorks < ActiveRecord::Migration[6.0]
  def change
    create_table :works do |t|
      t.string :work_id
      t.string :titulo
      t.string :data
      t.string :dimensao
      t.string :suporte
      t.string :tecnica
      t.references :event, null: false, foreign_key: true
      t.references :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end

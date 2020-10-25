class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :event_id
      t.string :denominacao
      t.string :data_inicio
      t.string :data_final
      t.string :realizacao

      t.timestamps
    end
  end
end

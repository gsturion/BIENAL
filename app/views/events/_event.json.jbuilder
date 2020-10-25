json.extract! event, :id, :event_id, :denominacao, :data_inicio, :data_final, :realizacao, :created_at, :updated_at
json.url event_url(event, format: :json)

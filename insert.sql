-- Inserindo 5 tipos de plantas na tabela "plant_types"
INSERT INTO plant_types (name) VALUES
  ('Suculentas'),
  ('Plantas de Interior'),
  ('Plantas Aromáticas'),
  ('Plantas Carnívoras'),
  ('Plantas Medicinais');

-- Inserindo 10 plantas na tabela "plants"
INSERT INTO plants (title, subtitle, tags, price, is_sale, discount_percent, characteristics, description, image_url, plant_type_id) VALUES
  ('Cacto Bola', 'Uma planta suculenta fácil de cuidar', 'cacto, suculenta, interior', 12.99, false, 0, 'Pequeno, Espinhoso', 'Ideal para ambientes internos com pouca manutenção.', 'https://example.com/cacto-bola.jpg', 1),
  ('Echeveria Azul', 'Suculenta de folhas azuladas', 'echeveria, suculenta, decoração', 18.50, true, 10, 'Folhas grossas, Tolerante à seca', 'Linda e perfeita para vasos decorativos.', 'https://example.com/echeveria-azul.jpg', 1),
  ('Ficus Lyrata', 'Planta de interior com folhas grandes', 'ficus, interior, grande', 75.00, true, 15, 'Folhas grandes, Ornamental', 'Traz sofisticação a qualquer ambiente.', 'https://example.com/ficus-lyrata.jpg', 2),
  ('Jiboia', 'Planta pendente de interior', 'jiboia, trepadeira, interior', 25.00, false, 0, 'Trepadeira, Baixa manutenção', 'Ótima para decorar estantes e prateleiras.', 'https://example.com/jiboia.jpg', 2),
  ('Hortelã', 'Planta aromática para chás e culinária', 'hortelã, aromática, culinária', 10.00, true, 5, 'Fácil cultivo, Aroma refrescante', 'Ideal para vasos ou hortas.', 'https://example.com/hortela.jpg', 3),
  ('Alecrim', 'Erva aromática para temperos', 'alecrim, aromática, tempero', 12.00, false, 0, 'Resistente, Aroma forte', 'Muito usado na culinária mediterrânea.', 'https://example.com/alecrim.jpg', 3),
  ('Dioneia', 'Planta carnívora que atrai insetos', 'dioneia, carnívora, exótica', 35.00, true, 20, 'Insetívora, Visual exótico', 'Captura e digere insetos pequenos.', 'https://example.com/dioneia.jpg', 4),
  ('Nepenthes', 'Planta carnívora com jarros pendentes', 'nepenthes, carnívora, tropical', 55.00, false, 0, 'Exótica, Precisa de umidade', 'Ideal para colecionadores de plantas raras.', 'https://example.com/nepenthes.jpg', 4),
  ('Babosa', 'Planta medicinal com múltiplos usos', 'babosa, medicinal, pele', 15.00, false, 0, 'Gel interno, Fácil cultivo', 'Muito utilizada para cuidados com a pele e cabelo.', 'https://example.com/babosa.jpg', 5),
  ('Camomila', 'Planta medicinal para chás calmantes', 'camomila, medicinal, chá', 8.00, true, 10, 'Flor delicada, Efeito calmante', 'Ideal para relaxamento e insônia.', 'https://example.com/camomila.jpg', 5);

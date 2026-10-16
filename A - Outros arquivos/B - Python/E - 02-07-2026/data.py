import locale
from datetime import date
 
# Definir Localizade Brasil Opção comum em Windows
locale.setlocale(locale.LC_TIME, 'Portuguese_Brazil')
 
# 2. Obter a data de hoje
data_hoje = date.today()
 
# 3. Formatar a data para obter o nome do dia da semana em português
# %A retorna o nome completo do dia da semana (ex: "Quinta-feira")
dia_da_semana = data_hoje.strftime('%A')
 
# 4. Exibir o resultado
print(f"O dia da semana de hoje é: {dia_da_semana}")
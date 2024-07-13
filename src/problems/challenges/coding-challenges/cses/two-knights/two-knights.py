n = int(input());

for k in range(1, n + 1):
  print(int(pow(k, 2) * (pow(k, 2) - 1)/2 - 4 * (k - 1) * (k - 2)));

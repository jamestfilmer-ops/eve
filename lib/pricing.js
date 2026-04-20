// lib/pricing.js — single source of truth for all pricing values
// Import this wherever a price is displayed. Never hardcode.

export const PRICING = {
  monthlyUsd:        4.99,
  annualMonthlyUsd:  2.50,   // $30/yr ÷ 12
  annualTotalUsd:    30,
  savingsPct:        50,     // (1 - 30/(4.99*12)) = ~50%
  savingsLabel:      'Save 50%',
  monthlyLabel:      '$4.99',
  annualLabel:       '$2.50',
  annualBilledLabel: 'Billed $30/year',
  coffeeLineMonthly: 'Less than a latte a month.',
  coffeeLineAnnual:  'Less than a Netflix month, for a whole year.',
}

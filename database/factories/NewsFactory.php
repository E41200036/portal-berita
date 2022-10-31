<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class NewsFactory extends Factory
{

    public function definition()
    {
        return [
            'title'       => fake()->sentence(2),
            'description' => fake()->sentence(10),
            'category'    => fake()->randomElement(['sport', 'politics', 'economy']),
            'author'      => fake()->email()
        ];
    }
}

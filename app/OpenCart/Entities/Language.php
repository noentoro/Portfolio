<?php

namespace App\OpenCart\Entities;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    protected $primaryKey = 'language_id';
    protected $table = 'language';

    public $timestamps = false;
}

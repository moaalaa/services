<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    // User Relation
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    // Category Relation
    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    // Order Relation
    public function order()
    {
        return $this->hasMany('App\Order');
    }
    // Vote Relation
    public function votes()
    {
        return $this->hasMany('App\Vote');
    }
}
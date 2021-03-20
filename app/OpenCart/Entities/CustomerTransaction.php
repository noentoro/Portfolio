<?php

namespace App\OpenCart\Entities;

use Illuminate\Database\Eloquent\Model;
use App\OpenCart\Entities\Customer;

class CustomerTransaction extends Model
{
    protected $primaryKey = 'customer_transaction_id';
    protected $table = 'customer_transaction';

    const CREATED_AT = 'date_added';
    const UPDATED_AT = null;

    protected $guarded = ['customer_transaction_id'];

    /**
     * The storage format of the model's date columns.
     *
     * @var string
     */
    protected $dateFormat = 'Y-m-d H:i:s';

    public function user()
    {
        return $this->belongsTo(Customer::class);
    }
}

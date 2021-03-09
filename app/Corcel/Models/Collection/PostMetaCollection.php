<?php /** @noinspection MagicMethodsValidityInspection */

/**
 * Corcel\PostMetaCollection
 *
 */

namespace App\Corcel\Models\Collection;

use Illuminate\Database\Eloquent\Collection;

class PostMetaCollection extends Collection
{
    protected $changedKeys = array();

    /**
     * Search for the desired key and return only the row that represent it
     *
     * @param string $key
     * @return string
     */
    public function __get($key)
    {
        foreach ($this->items as $item) {
            if ($item->meta_key == $key) {
                return $item->meta_value;
            }
        }
    }

    public function __set($key, $value)
    {
        $this->changedKeys[] = $key;

        foreach ($this->items as $item) {
            if ($item->meta_key == $key) {
                $item->meta_value = $value;
                return;
            }
        }

        $item = new PostMeta(array(
            'meta_key' => $key,
            'meta_value' => $value,
        ));

        $this->push($item);
    }

    public function save($postId)
    {
        $this->each(function($item) use ($postId) {
            if (in_array($item->meta_key, $this->changedKeys, false)) {
                $item->post_id = $postId;
                $item->save();
            }
        });
    }

}
